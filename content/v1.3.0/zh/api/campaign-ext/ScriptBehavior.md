---
title: "ScriptBehavior"
description: "ScriptBehavior 的自动生成类参考。"
---
# ScriptBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class ScriptBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/ScriptBehavior.cs`

## 概述

`ScriptBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddUsableMachineTarget
`public static void AddUsableMachineTarget(Agent ownerAgent, UsableMachine targetUsableMachine)`

**用途 / Purpose:** **用途 / Purpose:** 将 usable machine target 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ScriptBehavior.AddUsableMachineTarget(ownerAgent, targetUsableMachine);
```

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)`

**用途 / Purpose:** **用途 / Purpose:** 将 agent target 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ScriptBehavior.AddAgentTarget(ownerAgent, targetAgent);
```

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)`

**用途 / Purpose:** **用途 / Purpose:** 将 world frame target 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ScriptBehavior.AddWorldFrameTarget(ownerAgent, targetWorldFrame);
```

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent, ScriptBehavior.SelectTargetDelegate selectTargetDelegate, ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate, ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)`

**用途 / Purpose:** **用途 / Purpose:** 将 target with delegate 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
ScriptBehavior.AddTargetWithDelegate(ownerAgent, selectTargetDelegate, onTargetReachWaitDelegate, onTargetReachedDelegate, 0);
```

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 near target 状态或条件。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.IsNearTarget(targetAgent);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
scriptBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 availability 的结果。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 debug info 的结果。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.GetDebugInfo();
```

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectTargetDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.SelectTargetDelegate(agent, targetAgent, targetUsableMachine, targetFrame, customTargetReachedRangeThreshold, customTargetReachedRotationThreshold);
```

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)`

**用途 / Purpose:** **用途 / Purpose:** 在 target reached delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.OnTargetReachedDelegate(agent, targetAgent, targetUsableMachine, targetFrame);
```

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)`

**用途 / Purpose:** **用途 / Purpose:** 在 target reached wait delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScriptBehavior 实例
ScriptBehavior scriptBehavior = ...;
scriptBehavior.OnTargetReachedWaitDelegate(agent, waitTimeInSeconds);
```

## 使用示例

```csharp
ScriptBehavior.AddUsableMachineTarget(ownerAgent, targetUsableMachine);
```

## 参见

- [本区域目录](../)