---
title: "BaseBattleMissionController"
description: "BaseBattleMissionController 的自动生成类参考。"
---
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BaseBattleMissionController.cs`

## 概述

`BaseBattleMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `BaseBattleMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.AfterStart();
```

### GetTeamAI
`public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)`

**用途 / Purpose:** 读取并返回当前对象中 「team a i」 的结果。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.GetTeamAI(team, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnMissionTick(0);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理与 「mission ended」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
var result = baseBattleMissionController.OnEndMissionRequest(canPlayerLeave);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseBattleMissionController 实例
BaseBattleMissionController baseBattleMissionController = ...;
baseBattleMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BaseBattleMissionController instance = ...;
```

## 参见

- [本区域目录](../)