<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerGameModeBase` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams { get; }` |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly { get; }` |
| `SpawnComponent` | `public SpawnComponent SpawnComponent { get; }` |


## Key Methods

### GetMissionType

```csharp
public abstract MultiplayerGameType GetMissionType()
```

### CheckIfOvertime

```csharp
public virtual bool CheckIfOvertime()
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### CheckForWarmupEnd

```csharp
public virtual bool CheckForWarmupEnd()
```

### CheckForRoundEnd

```csharp
public virtual bool CheckForRoundEnd()
```

### CheckForMatchEnd

```csharp
public virtual bool CheckForMatchEnd()
```

### UseCultureSelection

```csharp
public virtual bool UseCultureSelection()
```

### UseRoundController

```csharp
public virtual bool UseRoundController()
```

### GetWinnerTeam

```csharp
public virtual Team GetWinnerTeam()
```

### OnPeerChangedTeam

```csharp
public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### ClearPeerCounts

```csharp
public void ClearPeerCounts()
```

### ShouldSpawnVisualsForServer

```csharp
public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)
```

### HandleAgentVisualSpawning

```csharp
public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)
```

### AllowCustomPlayerBanners

```csharp
public virtual bool AllowCustomPlayerBanners()
```

### GetScoreForKill

```csharp
public virtual int GetScoreForKill(Agent killedAgent)
```

### GetTroopNumberMultiplierForMissingPlayer

```csharp
public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)
```

### GetCurrentGoldForPeer

```csharp
public int GetCurrentGoldForPeer(MissionPeer peer)
```

### ChangeCurrentGoldForPeer

```csharp
public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)