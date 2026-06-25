---
title: "ArenaDuelMissionController"
description: "ArenaDuelMissionController 的自动生成类参考。"
---
# ArenaDuelMissionController

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaDuelMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaDuelMissionController.cs`

## 概述

`ArenaDuelMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ArenaDuelMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArenaDuelMissionController 实例
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaDuelMissionController 实例
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaDuelMissionController 实例
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaDuelMissionController 实例
ArenaDuelMissionController arenaDuelMissionController = ...;
var result = arenaDuelMissionController.OnEndMissionRequest(canPlayerLeave);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaDuelMissionController>();
```

## 参见

- [本区域目录](../)