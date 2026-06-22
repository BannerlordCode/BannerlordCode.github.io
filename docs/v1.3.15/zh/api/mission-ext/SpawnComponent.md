<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`

## 概述

`SpawnComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<SpawnComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AreAgentsSpawning
```csharp
public bool AreAgentsSpawning()
```

### SetNewSpawnFrameBehavior
```csharp
public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)
```

### SetNewSpawningBehavior
```csharp
public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)
```

### SetSiegeSpawningBehavior
```csharp
public static void SetSiegeSpawningBehavior()
```

### SetFlagDominationSpawningBehavior
```csharp
public static void SetFlagDominationSpawningBehavior()
```

### SetWarmupSpawningBehavior
```csharp
public static void SetWarmupSpawningBehavior()
```

### SetSpawningBehaviorForCurrentGameType
```csharp
public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### GetSpawnFrame
```csharp
public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)
```

### SetEarlyAgentVisualsDespawning
```csharp
public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)
```

### ToggleUpdatingSpawnEquipment
```csharp
public void ToggleUpdatingSpawnEquipment(bool canUpdate)
```

### AllowEarlyAgentVisualsDespawning
```csharp
public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)
```

### GetMaximumReSpawnPeriodForPeer
```csharp
public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

## 使用示例

```csharp
// SpawnComponent (Component) 的典型用法
agent.GetComponent<SpawnComponent>();
```

## 参见

- [完整类目录](../catalog)