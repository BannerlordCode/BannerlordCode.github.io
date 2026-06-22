<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionPeer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionPeer` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `JoinTime` | `public DateTime JoinTime { get; }` |
| `EquipmentUpdatingExpired` | `public bool EquipmentUpdatingExpired { get; }` |
| `TeamInitialPerkInfoReady` | `public bool TeamInitialPerkInfoReady { get; }` |
| `HasSpawnedAgentVisuals` | `public bool HasSpawnedAgentVisuals { get; set; }` |
| `SelectedTroopIndex` | `public int SelectedTroopIndex { get; set; }` |
| `NextSelectedTroopIndex` | `public int NextSelectedTroopIndex { get; set; }` |
| `Representative` | `public MissionRepresentativeBase Representative { get; }` |
| `Perks` | `public MBReadOnlyList<int > Perks { get; }` |
| `DisplayedName` | `public string DisplayedName { get; }` |
| `SelectedPerks` | `public MBReadOnlyList<MPPerkObject> SelectedPerks { get; }` |
| `SpawnTimer` | `public Timer SpawnTimer { get; }` |
| `HasSpawnTimerExpired` | `public bool HasSpawnTimerExpired { get; }` |
| `VotedForBan` | `public BasicCultureObject VotedForBan { get; }` |
| `VotedForSelection` | `public BasicCultureObject VotedForSelection { get; }` |
| `WantsToSpawnAsBot` | `public bool WantsToSpawnAsBot { get; }` |
| `SpawnCountThisRound` | `public int SpawnCountThisRound { get; }` |
| `RequestedKickPollCount` | `public int RequestedKickPollCount { get; }` |
| `KillCount` | `public int KillCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |


## Key Methods

### SetMutedFromPlatform

```csharp
public void SetMutedFromPlatform(bool isMuted)
```

### SetMuted

```csharp
public void SetMuted(bool isMuted)
```

### ResetRequestedKickPollCount

```csharp
public void ResetRequestedKickPollCount()
```

### IncrementRequestedKickPollCount

```csharp
public void IncrementRequestedKickPollCount()
```

### GetSelectedPerkIndexWithPerkListIndex

```csharp
public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)
```

### SelectPerk

```csharp
public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)
```

### HandleVoteChange

```csharp
public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnInitialize

```csharp
public override void OnInitialize()
```

### GetAmountOfAgentVisualsForPeer

```csharp
public int GetAmountOfAgentVisualsForPeer()
```

### GetVisuals

```csharp
public PeerVisualsHolder GetVisuals(int visualIndex)
```

### ClearVisuals

```csharp
public void ClearVisuals(int visualIndex)
```

### ClearAllVisuals

```csharp
public void ClearAllVisuals(bool freeResources = false)
```

### OnVisualsSpawned

```csharp
public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)
```

### GetAllAgentVisualsForPeer

```csharp
public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()
```

### GetAgentVisualForPeer

```csharp
public IAgentVisual GetAgentVisualForPeer(int visualsIndex)
```

### GetAgentVisualForPeer

```csharp
public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)
```

### TickInactivityStatus

```csharp
public void TickInactivityStatus()
```

### OnKillAnotherPeer

```csharp
public void OnKillAnotherPeer(MissionPeer victimPeer)
```

### OverrideCultureWithTeamCulture

```csharp
public void OverrideCultureWithTeamCulture()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)