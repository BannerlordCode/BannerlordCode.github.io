<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawningBehaviorBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawningBehaviorBase

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SpawningBehaviorBase` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Initialize

```csharp
public virtual void Initialize(SpawnComponent spawnComponent)
```

### Clear

```csharp
public virtual void Clear()
```

### OnTick

```csharp
public virtual void OnTick(float dt)
```

### AreAgentsSpawning

```csharp
public bool AreAgentsSpawning()
```

### RequestStartSpawnSession

```csharp
public virtual void RequestStartSpawnSession()
```

### RequestStopSpawnSession

```csharp
public void RequestStopSpawnSession()
```

### SetRemainingAgentsInvulnerable

```csharp
public void SetRemainingAgentsInvulnerable()
```

### CanUpdateSpawnEquipment

```csharp
public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)
```

### ToggleUpdatingSpawnEquipment

```csharp
public void ToggleUpdatingSpawnEquipment(bool canUpdate)
```

### AllowEarlyAgentVisualsDespawning

```csharp
public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)
```

### GetMaximumReSpawnPeriodForPeer

```csharp
public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)
```

### OnClearScene

```csharp
public virtual void OnClearScene()
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnSpawningEndedEventDelegate

```csharp
public delegate void OnSpawningEndedEventDelegate()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)