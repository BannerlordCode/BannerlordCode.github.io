<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerSiege`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerSiege` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `Contribution` | `public float Contribution { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)