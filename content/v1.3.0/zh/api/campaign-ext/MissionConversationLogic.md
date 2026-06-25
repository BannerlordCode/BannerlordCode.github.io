---
title: "MissionConversationLogic"
description: "MissionConversationLogic 的自动生成类参考。"
---
# MissionConversationLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class MissionConversationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`

## 概述

`MissionConversationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionConversationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static MissionConversationLogic Current { get; }` |
| `State` | `public MissionState State { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `IsReadyForConversation` | `public bool IsReadyForConversation { get; }` |
| `ConversationAgent` | `public Agent ConversationAgent { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnRemoveBehavior();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnAgentBuild(agent, banner);
```

### SetSpawnArea
`public void SetSpawnArea(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 为 spawn area 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea(alley);
```

### SetSpawnArea
`public void SetSpawnArea(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 为 spawn area 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea(workshop);
```

### SetSpawnArea
`public void SetSpawnArea(string customTag)`

**用途 / Purpose:** **用途 / Purpose:** 为 spawn area 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea("example");
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnMissionTick(0);
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.EarlyStart();
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnAgentInteraction(userAgent, agent, 0);
```

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)`

**用途 / Purpose:** **用途 / Purpose:** 启动conversation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.StartConversation(agent, false, false);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there agent action 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
var result = missionConversationLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnRenderingStarted();
```

### DisableStartConversation
`public void DisableStartConversation(bool isDisabled)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableStartConversation 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionConversationLogic 实例
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.DisableStartConversation(false);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionConversationLogic>();
```

## 参见

- [本区域目录](../)