<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`

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

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**用途 / Purpose:** 处理 `are agents spawning` 相关逻辑。

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)`

**用途 / Purpose:** 设置 `new spawn frame behavior` 的值或状态。

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)`

**用途 / Purpose:** 设置 `new spawning behavior` 的值或状态。

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior()`

**用途 / Purpose:** 设置 `siege spawning behavior` 的值或状态。

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior()`

**用途 / Purpose:** 设置 `flag domination spawning behavior` 的值或状态。

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior()`

**用途 / Purpose:** 设置 `warmup spawning behavior` 的值或状态。

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)`

**用途 / Purpose:** 设置 `spawning behavior for current game type` 的值或状态。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)`

**用途 / Purpose:** 获取 `spawn frame` 的当前值。

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)`

**用途 / Purpose:** 设置 `early agent visuals despawning` 的值或状态。

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**用途 / Purpose:** 处理 `toggle updating spawn equipment` 相关逻辑。

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**用途 / Purpose:** 处理 `allow early agent visuals despawning` 相关逻辑。

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)`

**用途 / Purpose:** 获取 `maximum re spawn period for peer` 的当前值。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<SpawnComponent>();
```

## 参见

- [完整类目录](../catalog)