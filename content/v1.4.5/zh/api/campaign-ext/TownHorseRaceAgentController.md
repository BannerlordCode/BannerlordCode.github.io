---
title: "TownHorseRaceAgentController"
description: "TownHorseRaceAgentController 的自动生成类参考。"
---
# TownHorseRaceAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceAgentController : AgentController`
**Base:** `AgentController`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.AgentControllers/TownHorseRaceAgentController.cs`

## 概述

`TownHorseRaceAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TownHorseRaceAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceAgentController 实例
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.OnInitialize();
```

### DisableMovement
`public void DisableMovement()`

**用途 / Purpose:** 处理与 「disable movement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceAgentController 实例
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.DisableMovement();
```

### Start
`public void Start()`

**用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceAgentController 实例
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.Start();
```

### OnEnterCheckPoint
`public void OnEnterCheckPoint(VolumeBox checkPoint)`

**用途 / Purpose:** 在 「enter check point」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownHorseRaceAgentController 实例
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.OnEnterCheckPoint(checkPoint);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceAgentController>();
```

## 参见

- [本区域目录](../)