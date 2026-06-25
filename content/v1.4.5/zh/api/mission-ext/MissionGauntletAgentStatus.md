---
title: "MissionGauntletAgentStatus"
description: "MissionGauntletAgentStatus 的自动生成类参考。"
---
# MissionGauntletAgentStatus

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentStatus : MissionAgentStatusUIHandler`
**Base:** `MissionAgentStatusUIHandler`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletAgentStatus.cs`

## 概述

`MissionGauntletAgentStatus` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddInteractionMessage
`public override void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 将 interaction message 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AddInteractionMessage(message);
```

### RemoveInteractionMessage
`public override void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 从当前容器或状态中移除 interaction message。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.RemoveInteractionMessage(message);
```

### HasInteractionMessage
`public override bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 判断当前对象是否已经持有 interaction message。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
var result = missionGauntletAgentStatus.HasInteractionMessage(message);
```

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**用途 / Purpose:** 在 mission state activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionStateActivated();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AfterStart();
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenInitialize();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnDeploymentFinished();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 在 focus gained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnFocusGained(mainAgent, focusableObject, false);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 agent interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentInteraction(userAgent, agent, 0);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 在 focus lost 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnFocusLost(agent, focusableObject);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 在 agent deleted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentDeleted(affectedAgent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**用途 / Purpose:** 在 photo mode activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**用途 / Purpose:** 在 photo mode deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletAgentStatus 实例
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnPhotoModeDeactivated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AddInteractionMessage(message);
```

## 参见

- [本区域目录](../)