---
title: "MissionAgentLookHandler"
description: "MissionAgentLookHandler 的自动生成类参考。"
---
# MissionAgentLookHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs`

## 概述

`MissionAgentLookHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentLookHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### GetScore
`public float GetScore(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「score」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetScore(agent);
```

### GetTargetPosition
`public Vec3 GetTargetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「target position」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetTargetPosition();
```

### GetBasicPosition
`public Vec3 GetBasicPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「basic position」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.GetBasicPosition();
```

### IsVisibleFor
`public bool IsVisibleFor(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「visible for」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsVisibleFor(agent);
```

### IsRelevant
`public bool IsRelevant(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「relevant」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
var result = missionAgentLookHandler.IsRelevant(agent);
```

### Reset
`public void Reset(MissionAgentLookHandler.PointOfInterest pointOfInterest, float duration)`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentLookHandler 实例
MissionAgentLookHandler missionAgentLookHandler = ...;
missionAgentLookHandler.Reset(pointOfInterest, 0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentLookHandler>();
```

## 参见

- [本区域目录](../)