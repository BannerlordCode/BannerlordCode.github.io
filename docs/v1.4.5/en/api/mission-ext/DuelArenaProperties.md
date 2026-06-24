<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelArenaProperties`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DuelArenaProperties

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DuelArenaProperties`
**Area:** mission-ext

## Overview

`DuelArenaProperties` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreOngoingDuelsActive` | `public bool AreOngoingDuelsActive { get; set; }` |
| `IsPlayerInDuel` | `public bool IsPlayerInDuel { get; set; }` |
| `PlayerBounty` | `public int PlayerBounty { get; set; }` |
| `PlayerPrefferedArenaType` | `public int PlayerPrefferedArenaType { get; set; }` |
| `PlayerScoreText` | `public string PlayerScoreText { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `Markers` | `public MissionDuelMarkersVM Markers { get; set; }` |
| `PlayerDuelMatch` | `public DuelMatchVM PlayerDuelMatch { get; set; }` |
| `OngoingDuels` | `public MBBindingList<DuelMatchVM> OngoingDuels { get; set; }` |
| `KillNotifications` | `public MBBindingList<MPDuelKillNotificationItemVM> KillNotifications { get; set; }` |

## Key Methods

### DuelArenaProperties
`public struct DuelArenaProperties(GameEntity flagEntity, int index, TroopType arenaTroopType)`

**Purpose:** Handles logic related to `duel arena properties`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnScreenResolutionChanged
`public void OnScreenResolutionChanged()`

**Purpose:** Called when the `screen resolution changed` event is raised.

### OnMainAgentRemoved
`public void OnMainAgentRemoved()`

**Purpose:** Called when the `main agent removed` event is raised.

### OnMainAgentBuild
`public void OnMainAgentBuild()`

**Purpose:** Called when the `main agent build` event is raised.

### GetAgentDefaultPreferredArenaType
`public static TroopType GetAgentDefaultPreferredArenaType(Agent agent)`

**Purpose:** Gets the current value of `agent default preferred arena type`.

## Usage Example

```csharp
// First obtain a DuelArenaProperties instance from game state, then call one of its public methods
var value = new DuelArenaProperties();
value.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
