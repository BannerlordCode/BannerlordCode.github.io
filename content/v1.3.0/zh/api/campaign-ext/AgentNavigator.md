---
title: "AgentNavigator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentNavigator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `stop using game object` 事件触发时调用此方法。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### SetTarget
`public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, Agent.AIScriptedFrameFlags customFlags = 0)`

**用途 / Purpose:** 设置 `target` 的值或状态。

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, Agent.AIScriptedFrameFlags flags = 0, bool disableClearTargetWhenTargetIsReached = false)`

**用途 / Purpose:** 设置 `target frame` 的值或状态。

### ClearTarget
`public void ClearTarget()`

**用途 / Purpose:** 处理 `clear target` 相关逻辑。

### Tick
`public void Tick(float dt, bool isSimulation = false)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetDistanceToTarget
`public float GetDistanceToTarget(UsableMachine target)`

**用途 / Purpose:** 获取 `distance to target` 的当前值。

### IsTargetReached
`public bool IsTargetReached()`

**用途 / Purpose:** 处理 `is target reached` 相关逻辑。

### HoldAndHideRecentlyUsedMeshes
`public void HoldAndHideRecentlyUsedMeshes()`

**用途 / Purpose:** 处理 `hold and hide recently used meshes` 相关逻辑。

### RecoverRecentlyUsedMeshes
`public void RecoverRecentlyUsedMeshes()`

**用途 / Purpose:** 处理 `recover recently used meshes` 相关逻辑。

### CanSeeAgent
`public bool CanSeeAgent(Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `see agent`。

### IsCarryingSomething
`public bool IsCarryingSomething()`

**用途 / Purpose:** 处理 `is carrying something` 相关逻辑。

### SetPrefabVisibility
`public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)`

**用途 / Purpose:** 设置 `prefab visibility` 的值或状态。

### GetPrefabVisibility
`public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)`

**用途 / Purpose:** 获取 `prefab visibility` 的当前值。

### SetSpecialItem
`public void SetSpecialItem()`

**用途 / Purpose:** 设置 `special item` 的值或状态。

### SetItemsVisibility
`public void SetItemsVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `items visibility` 的值或状态。

### SetCommonArea
`public void SetCommonArea(Alley alley)`

**用途 / Purpose:** 设置 `common area` 的值或状态。

### ForceThink
`public void ForceThink(float inSeconds)`

**用途 / Purpose:** 处理 `force think` 相关逻辑。

### RefreshBehaviorGroups
`public void RefreshBehaviorGroups(bool isSimulation)`

**用途 / Purpose:** 刷新 `behavior groups` 的显示或缓存。

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**用途 / Purpose:** 获取 `active behavior` 的当前值。

### GetActiveBehaviorGroup
`public AgentBehaviorGroup GetActiveBehaviorGroup()`

**用途 / Purpose:** 获取 `active behavior group` 的当前值。

## 使用示例

```csharp
var value = new AgentNavigator();
value.OnStopUsingGameObject();
```

## 参见

- [完整类目录](../catalog)