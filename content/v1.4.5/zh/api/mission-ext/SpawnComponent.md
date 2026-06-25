---
title: "SpawnComponent"
description: "SpawnComponent 的自动生成类参考。"
---
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnComponent.cs`

## 概述

`SpawnComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SpawnComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpawnFrameBehavior` | `public SpawnFrameBehaviorBase SpawnFrameBehavior { get; }` |
| `SpawningBehavior` | `public SpawningBehaviorBase SpawningBehavior { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.OnBehaviorInitialize();
```

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**用途 / Purpose:** 处理与 「are agents spawning」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
var result = spawnComponent.AreAgentsSpawning();
```

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)`

**用途 / Purpose:** 为 「new spawn frame behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.SetNewSpawnFrameBehavior(spawnFrameBehavior);
```

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)`

**用途 / Purpose:** 为 「new spawning behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.SetNewSpawningBehavior(spawningBehavior);
```

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior()`

**用途 / Purpose:** 为 「siege spawning behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SpawnComponent.SetSiegeSpawningBehavior();
```

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior()`

**用途 / Purpose:** 为 「flag domination spawning behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SpawnComponent.SetFlagDominationSpawningBehavior();
```

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior()`

**用途 / Purpose:** 为 「warmup spawning behavior」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SpawnComponent.SetWarmupSpawningBehavior();
```

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)`

**用途 / Purpose:** 为 「spawning behavior for current game type」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
SpawnComponent.SetSpawningBehaviorForCurrentGameType(currentGameType);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.OnMissionTick(0);
```

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn frame」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
var result = spawnComponent.GetSpawnFrame(team, false, false);
```

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)`

**用途 / Purpose:** 为 「early agent visuals despawning」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.SetEarlyAgentVisualsDespawning(missionPeer, false);
```

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**用途 / Purpose:** 处理与 「toggle updating spawn equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.ToggleUpdatingSpawnEquipment(false);
```

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**用途 / Purpose:** 允许当前对象启用或执行「early agent visuals despawning」。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
var result = spawnComponent.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum re spawn period for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
var result = spawnComponent.GetMaximumReSpawnPeriodForPeer(lobbyPeer);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnComponent 实例
SpawnComponent spawnComponent = ...;
spawnComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
var component = agent.GetComponent<SpawnComponent>();
```

## 参见

- [本区域目录](../)