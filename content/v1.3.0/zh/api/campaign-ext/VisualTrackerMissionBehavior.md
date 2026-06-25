---
title: "VisualTrackerMissionBehavior"
description: "VisualTrackerMissionBehavior 的自动生成类参考。"
---
# VisualTrackerMissionBehavior

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class VisualTrackerMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs`

## 概述

`VisualTrackerMissionBehavior` 位于 `SandBox.Missions.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 在 「agent created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentCreated(agent);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnMissionTick(0);
```

### RegisterLocalOnlyObject
`public void RegisterLocalOnlyObject(ITrackableBase obj)`

**用途 / Purpose:** 将「local only object」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.RegisterLocalOnlyObject(obj);
```

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** 读取并返回当前对象中 「compass targets」 的结果。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
var result = visualTrackerMissionBehavior.GetCompassTargets();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 在 「agent deleted」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VisualTrackerMissionBehavior 实例
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentDeleted(affectedAgent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualTrackerMissionBehavior visualTrackerMissionBehavior = ...;
visualTrackerMissionBehavior.OnAgentCreated(agent);
```

## 参见

- [本区域目录](../)