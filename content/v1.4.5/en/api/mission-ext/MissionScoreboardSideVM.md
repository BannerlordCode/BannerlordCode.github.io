---
title: "MissionScoreboardSideVM"
description: "Auto-generated class reference for MissionScoreboardSideVM."
---
# MissionScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardSideVM.cs`

## Overview

`MissionScoreboardSideVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Players` | `public MBBindingList<MissionScoreboardPlayerVM> Players { get; set; }` |
| `EntryProperties` | `public MBBindingList<MissionScoreboardHeaderItemVM> EntryProperties { get; set; }` |
| `PlayerSortController` | `public MissionScoreboardPlayerSortControllerVM PlayerSortController { get; set; }` |
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `IsSecondSide` | `public bool IsSecondSide { get; set; }` |
| `ShowAttackerOrDefenderIcons` | `public bool ShowAttackerOrDefenderIcons { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PlayersText` | `public string PlayersText { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `RoundsWon` | `public int RoundsWon { get; set; }` |
| `TeamColor` | `public string TeamColor { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.Tick(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.OnFinalize();
```

### UpdateRoundAttributes
`public void UpdateRoundAttributes()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of round attributes.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdateRoundAttributes();
```

### UpdateBotAttributes
`public void UpdateBotAttributes()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of bot attributes.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdateBotAttributes();
```

### UpdatePlayerAttributes
`public void UpdatePlayerAttributes(MissionPeer player)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of player attributes.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.UpdatePlayerAttributes(player);
```

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** **Purpose:** Removes player from the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RemovePlayer(peer);
```

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**Purpose:** **Purpose:** Adds player to the current collection or state.

```csharp
// Obtain an instance of MissionScoreboardSideVM from the subsystem API first
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.AddPlayer(peer);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScoreboardSideVM missionScoreboardSideVM = ...;
missionScoreboardSideVM.RefreshValues();
```

## See Also

- [Area Index](../)