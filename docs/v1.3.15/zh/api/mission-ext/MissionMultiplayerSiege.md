<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerSiege`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiege

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerSiege` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `Contribution` | `public float Contribution { get; }` |


## 主要方法

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### GetMissionType

```csharp
public override MultiplayerGameType GetMissionType()
```

### UseRoundController

```csharp
public override bool UseRoundController()
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### CheckForMatchEnd

```csharp
public override bool CheckForMatchEnd()
```

### GetWinnerTeam

```csharp
public override Team GetWinnerTeam()
```

### GetFlagOwnerTeam

```csharp
public Team GetFlagOwnerTeam(FlagCapturePoint flag)
```

### CheckForWarmupEnd

```csharp
public override bool CheckForWarmupEnd()
```

### OnPeerChangedTeam

```csharp
public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### RegisterObjective

```csharp
public bool RegisterObjective(GameEntity entity)
```

### AddContributionForObjective

```csharp
public void AddContributionForObjective(GameEntity objectiveEntity, MissionPeer contributorPeer, float contribution)
```

### GetAllContributorsForSideAndClear

```csharp
public List<KeyValuePair<MissionPeer, float>> GetAllContributorsForSideAndClear(GameEntity objectiveEntity, BattleSideEnum side)
```

### IncreaseAmount

```csharp
public void IncreaseAmount(float deltaContribution)
```

### OnDestructableComponentDestroyedDelegate

```csharp
public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer contributors)
```

### OnObjectiveGoldGainedDelegate

```csharp
public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)