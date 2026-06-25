---
title: "ScriptBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScriptBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 向当前集合/状态中添加 `usable machine target`。

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent target`。

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)`

**用途 / Purpose:** 向当前集合/状态中添加 `world frame target`。

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent, ScriptBehavior.SelectTargetDelegate selectTargetDelegate, ScriptBehavior.OnTargetReachedWaitDelegate onTargetReachWaitDelegate, ScriptBehavior.OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)`

**用途 / Purpose:** 向当前集合/状态中添加 `target with delegate`。

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent)`

**用途 / Purpose:** 处理 `is near target` 相关逻辑。

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 获取 `availability` 的当前值。

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 获取 `debug info` 的当前值。

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)`

**用途 / Purpose:** 处理 `select target delegate` 相关逻辑。

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)`

**用途 / Purpose:** 当 `target reached delegate` 事件触发时调用此方法。

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)`

**用途 / Purpose:** 当 `target reached wait delegate` 事件触发时调用此方法。

## 使用示例

```csharp
ScriptBehavior.AddUsableMachineTarget(ownerAgent, targetUsableMachine);
```

## 参见

- [完整类目录](../catalog)