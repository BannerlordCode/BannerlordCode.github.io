<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelMatchVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DuelMatchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMatchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/DuelMatchVM.cs`

## Overview

`DuelMatchVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FirstPlayerPeer` | `public MissionPeer FirstPlayerPeer { get; }` |
| `SecondPlayerPeer` | `public MissionPeer SecondPlayerPeer { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsPreparing` | `public bool IsPreparing { get; set; }` |
| `CountdownMessage` | `public string CountdownMessage { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayer` | `public MPPlayerVM FirstPlayer { get; set; }` |
| `SecondPlayer` | `public MPPlayerVM SecondPlayer { get; set; }` |

## Key Methods

### OnDuelPrepStarted
`public void OnDuelPrepStarted(MissionPeer opponentPeer, int prepDuration)`

**Purpose:** Called when the `duel prep started` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnDuelStarted
`public void OnDuelStarted(MissionPeer firstPeer, MissionPeer secondPeer, int arenaType)`

**Purpose:** Called when the `duel started` event is raised.

### OnDuelEnded
`public void OnDuelEnded()`

**Purpose:** Called when the `duel ended` event is raised.

### OnPeerScored
`public void OnPeerScored(MissionPeer peer)`

**Purpose:** Called when the `peer scored` event is raised.

### RefreshNames
`public void RefreshNames(bool changeGenericNames = false)`

**Purpose:** Refreshes the display or cache of `names`.

## Usage Example

```csharp
var value = new DuelMatchVM();
value.OnDuelPrepStarted(opponentPeer, 0);
```

## See Also

- [Complete Class Catalog](../catalog)