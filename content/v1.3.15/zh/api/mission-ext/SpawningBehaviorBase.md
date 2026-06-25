---
title: "SpawningBehaviorBase"
description: "SpawningBehaviorBase 的自动生成类参考。"
---
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

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.Initialize(spawnComponent);
```

### Clear
`public virtual void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.Clear();
```

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnTick(0);
```

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**用途 / Purpose:** 调用 AreAgentsSpawning 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.AreAgentsSpawning();
```

### RequestStartSpawnSession
`public virtual void RequestStartSpawnSession()`

**用途 / Purpose:** 调用 RequestStartSpawnSession 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.RequestStartSpawnSession();
```

### RequestStopSpawnSession
`public void RequestStopSpawnSession()`

**用途 / Purpose:** 调用 RequestStopSpawnSession 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.RequestStopSpawnSession();
```

### SetRemainingAgentsInvulnerable
`public void SetRemainingAgentsInvulnerable()`

**用途 / Purpose:** 为 remaining agents invulnerable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.SetRemainingAgentsInvulnerable();
```

### CanUpdateSpawnEquipment
`public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)`

**用途 / Purpose:** 检查当前对象是否满足 update spawn equipment 的前置条件。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.CanUpdateSpawnEquipment(missionPeer);
```

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**用途 / Purpose:** 调用 ToggleUpdatingSpawnEquipment 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.ToggleUpdatingSpawnEquipment(false);
```

### AllowEarlyAgentVisualsDespawning
`public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`

**用途 / Purpose:** 允许当前对象启用或执行early agent visuals despawning。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.AllowEarlyAgentVisualsDespawning(missionPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 maximum re spawn period for peer 的结果。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
var result = spawningBehaviorBase.GetMaximumReSpawnPeriodForPeer(peer);
```

### OnClearScene
`public virtual void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnClearScene();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnSpawningEndedEventDelegate
`public delegate void OnSpawningEndedEventDelegate()`

**用途 / Purpose:** 在 spawning ended event delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawningBehaviorBase 实例
SpawningBehaviorBase spawningBehaviorBase = ...;
spawningBehaviorBase.OnSpawningEndedEventDelegate();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SpawningBehaviorBase instance = ...;
```

## 参见

- [本区域目录](../)