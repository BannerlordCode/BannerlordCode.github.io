---
title: "SpawningBehaviorBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawningBehaviorBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpawningBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawningBehaviorBase`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs`

## 概述

`SpawningBehaviorBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public virtual void Initialize(SpawnComponent spawnComponent)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Clear
`public virtual void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**用途 / Purpose:** 处理 `are agents spawning` 相关逻辑。

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession()`

**用途 / Purpose:** 处理 `request start spawn session` 相关逻辑。

### RequestStopSpawnSession
`public void RequestStopSpawnSession()`

**用途 / Purpose:** 处理 `request stop spawn session` 相关逻辑。

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable()`

**用途 / Purpose:** 设置 `remaining agents invulnerable` 的值或状态。

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)`

**用途 / Purpose:** 判断当前对象是否可以执行 `update spawn equipment`。

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**用途 / Purpose:** 处理 `toggle updating spawn equipment` 相关逻辑。

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `allow early agent visuals despawning` 相关逻辑。

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**用途 / Purpose:** 获取 `maximum re spawn period for peer` 的当前值。

### OnClearScene
`public virtual void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

**用途 / Purpose:** 当 `spawning ended event delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomSpawningBehaviorBase();
```

## 参见

- [完整类目录](../catalog)