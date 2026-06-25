---
title: "PrisonBreakMissionController"
description: "PrisonBreakMissionController 的自动生成类参考。"
---
# PrisonBreakMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`

## 概述

`PrisonBreakMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `PrisonBreakMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.AfterStart();
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「agent interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「there agent action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
var result = prisonBreakMissionController.IsThereAgentAction(userAgent, otherAgent);
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 在 「agent alarmed state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
var result = prisonBreakMissionController.OnEndMissionRequest(canLeave);
```

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**用途 / Purpose:** 在 「stealth mission counter failed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnStealthMissionCounterFailed(obj);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PrisonBreakMissionController 实例
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnMissionTick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<PrisonBreakMissionController>();
```

## 参见

- [本区域目录](../)