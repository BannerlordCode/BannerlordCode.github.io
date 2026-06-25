---
title: "AgentNavigator"
description: "AgentNavigator 的自动生成类参考。"
---
# AgentNavigator

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public sealed class AgentNavigator`
**Base:** 无
**File:** `SandBox/AgentNavigator.cs`

## 概述

`AgentNavigator` 位于 `SandBox`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetUsableMachine` | `public UsableMachine TargetUsableMachine { get; }` |
| `TargetPosition` | `public WorldPosition TargetPosition { get; }` |
| `TargetDirection` | `public Vec2 TargetDirection { get; }` |
| `TargetEntity` | `public GameEntity TargetEntity { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `_agentState` | `public AgentNavigator.NavigationState _agentState { get; }` |
| `CharacterHasVisiblePrefabs` | `public bool CharacterHasVisiblePrefabs { get; }` |

## 主要方法

### OnStopUsingGameObject
`public void OnStopUsingGameObject()`

**用途 / Purpose:** 在 stop using game object 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.OnStopUsingGameObject();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.OnAgentRemoved(agent);
```

### SetTarget
`public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, Agent.AIScriptedFrameFlags customFlags = 0)`

**用途 / Purpose:** 为 target 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetTarget(usableMachine, false, 0);
```

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, Agent.AIScriptedFrameFlags flags = 0, bool disableClearTargetWhenTargetIsReached = false)`

**用途 / Purpose:** 为 target frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetTargetFrame(position, 0, 0, 0, 0, false);
```

### ClearTarget
`public void ClearTarget()`

**用途 / Purpose:** 清空当前对象中的target。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.ClearTarget();
```

### Tick
`public void Tick(float dt, bool isSimulation = false)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.Tick(0, false);
```

### GetDistanceToTarget
`public float GetDistanceToTarget(UsableMachine target)`

**用途 / Purpose:** 读取并返回当前对象中 distance to target 的结果。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetDistanceToTarget(target);
```

### IsTargetReached
`public bool IsTargetReached()`

**用途 / Purpose:** 判断当前对象是否处于 target reached 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.IsTargetReached();
```

### HoldAndHideRecentlyUsedMeshes
`public void HoldAndHideRecentlyUsedMeshes()`

**用途 / Purpose:** 调用 HoldAndHideRecentlyUsedMeshes 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.HoldAndHideRecentlyUsedMeshes();
```

### RecoverRecentlyUsedMeshes
`public void RecoverRecentlyUsedMeshes()`

**用途 / Purpose:** 调用 RecoverRecentlyUsedMeshes 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.RecoverRecentlyUsedMeshes();
```

### CanSeeAgent
`public bool CanSeeAgent(Agent otherAgent)`

**用途 / Purpose:** 检查当前对象是否满足 see agent 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.CanSeeAgent(otherAgent);
```

### IsCarryingSomething
`public bool IsCarryingSomething()`

**用途 / Purpose:** 判断当前对象是否处于 carrying something 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.IsCarryingSomething();
```

### SetPrefabVisibility
`public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)`

**用途 / Purpose:** 为 prefab visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetPrefabVisibility(0, "example", false);
```

### GetPrefabVisibility
`public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)`

**用途 / Purpose:** 读取并返回当前对象中 prefab visibility 的结果。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetPrefabVisibility(0, "example");
```

### SetSpecialItem
`public void SetSpecialItem()`

**用途 / Purpose:** 为 special item 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetSpecialItem();
```

### SetItemsVisibility
`public void SetItemsVisibility(bool isVisible)`

**用途 / Purpose:** 为 items visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetItemsVisibility(false);
```

### SetCommonArea
`public void SetCommonArea(Alley alley)`

**用途 / Purpose:** 为 common area 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.SetCommonArea(alley);
```

### ForceThink
`public void ForceThink(float inSeconds)`

**用途 / Purpose:** 调用 ForceThink 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.ForceThink(0);
```

### RefreshBehaviorGroups
`public void RefreshBehaviorGroups(bool isSimulation)`

**用途 / Purpose:** 使 behavior groups 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
agentNavigator.RefreshBehaviorGroups(false);
```

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**用途 / Purpose:** 读取并返回当前对象中 active behavior 的结果。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetActiveBehavior();
```

### GetActiveBehaviorGroup
`public AgentBehaviorGroup GetActiveBehaviorGroup()`

**用途 / Purpose:** 读取并返回当前对象中 active behavior group 的结果。

```csharp
// 先通过子系统 API 拿到 AgentNavigator 实例
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetActiveBehaviorGroup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentNavigator agentNavigator = ...;
agentNavigator.OnStopUsingGameObject();
```

## 参见

- [本区域目录](../../)