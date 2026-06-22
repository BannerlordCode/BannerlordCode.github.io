<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerFlagDomination`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerFlagDomination` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `MoraleRounded` | `public float MoraleRounded { get; }` |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning { get; }` |


## Key Methods

### UseGold

```csharp
public bool UseGold()
```

### AllowCustomPlayerBanners

```csharp
public override bool AllowCustomPlayerBanners()
```

### UseRoundController

```csharp
public override bool UseRoundController()
```

### GetMissionType

```csharp
public override MultiplayerGameType GetMissionType()
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnPeerChangedTeam

```csharp
public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### GetTimeUntilBattleSideVictory

```csharp
public float GetTimeUntilBattleSideVictory(BattleSideEnum side)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### CheckIfOvertime

```csharp
public override bool CheckIfOvertime()
```

### CheckForWarmupEnd

```csharp
public override bool CheckForWarmupEnd()
```

### CheckForRoundEnd

```csharp
public override bool CheckForRoundEnd()
```

### UseCultureSelection

```csharp
public override bool UseCultureSelection()
```

### OnAgentBuild

```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### ForfeitSpawning

```csharp
public void ForfeitSpawning(NetworkCommunicator peer)
```

### SetWinnerTeam

```csharp
public static void SetWinnerTeam(int winnerTeamNo)
```

### GetNumberOfAttackersAroundFlag

```csharp
public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)
```

### GetFlagOwnerTeam

```csharp
public Team GetFlagOwnerTeam(FlagCapturePoint flag)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)