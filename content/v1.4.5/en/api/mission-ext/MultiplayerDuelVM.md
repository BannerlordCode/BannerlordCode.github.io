---
title: "MultiplayerDuelVM"
description: "Auto-generated class reference for MultiplayerDuelVM."
---
# MultiplayerDuelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerDuelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerDuelVM.cs`

## Overview

`MultiplayerDuelVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Executes the DuelArenaProperties logic.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
var result = multiplayerDuelVM.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnFinalize();
```

### OnScreenResolutionChanged
`public void OnScreenResolutionChanged()`

**Purpose:** Invoked when the screen resolution changed event is raised.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnScreenResolutionChanged();
```

### OnMainAgentRemoved
`public void OnMainAgentRemoved()`

**Purpose:** Invoked when the main agent removed event is raised.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnMainAgentRemoved();
```

### OnMainAgentBuild
`public void OnMainAgentBuild()`

**Purpose:** Invoked when the main agent build event is raised.

```csharp
// Obtain an instance of MultiplayerDuelVM from the subsystem API first
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.OnMainAgentBuild();
```

### GetAgentDefaultPreferredArenaType
`public static TroopType GetAgentDefaultPreferredArenaType(Agent agent)`

**Purpose:** Reads and returns the agent default preferred arena type value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerDuelVM.GetAgentDefaultPreferredArenaType(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerDuelVM multiplayerDuelVM = ...;
multiplayerDuelVM.DuelArenaProperties(flagEntity, 0, arenaTroopType);
```

## See Also

- [Area Index](../)