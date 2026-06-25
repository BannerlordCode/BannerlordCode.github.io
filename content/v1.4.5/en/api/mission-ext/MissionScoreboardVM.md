---
title: "MissionScoreboardVM"
description: "Auto-generated class reference for MissionScoreboardVM."
---
# MissionScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardVM.cs`

## Overview

`MissionScoreboardVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EndOfBattle` | `public MPEndOfBattleVM EndOfBattle { get; set; }` |
| `PlayerActionList` | `public MBBindingList<StringPairItemWithActionVM> PlayerActionList { get; set; }` |
| `Sides` | `public MBBindingList<MissionScoreboardSideVM> Sides { get; set; }` |
| `IsUpdateOver` | `public bool IsUpdateOver { get; set; }` |
| `IsInitalizationOver` | `public bool IsInitalizationOver { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsPlayerActionsActive` | `public bool IsPlayerActionsActive { get; set; }` |
| `Spectators` | `public string Spectators { get; set; }` |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey { get; set; }` |
| `MissionName` | `public string MissionName { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `ServerName` | `public string ServerName { get; set; }` |
| `IsBotsEnabled` | `public bool IsBotsEnabled { get; set; }` |
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `ToggleMuteText` | `public string ToggleMuteText { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.RefreshValues();
```

### SetMouseState
`public void SetMouseState(bool isMouseVisible)`

**Purpose:** Assigns a new value to `mouse state` and updates the object's internal state.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.SetMouseState(false);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.Tick(0);
```

### OnPlayerSideChanged
`public void OnPlayerSideChanged(Team curTeam, Team nextTeam, MissionPeer client)`

**Purpose:** Invoked when the `player side changed` event is raised.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnPlayerSideChanged(curTeam, nextTeam, client);
```

### DecreaseSpectatorCount
`public void DecreaseSpectatorCount(MissionPeer spectatedPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.DecreaseSpectatorCount(spectatedPeer);
```

### IncreaseSpectatorCount
`public void IncreaseSpectatorCount(MissionPeer spectatedPeer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.IncreaseSpectatorCount(spectatedPeer);
```

### ExecuteToggleMute
`public void ExecuteToggleMute()`

**Purpose:** Runs the operation or workflow associated with `toggle mute`.

```csharp
// Obtain an instance of MissionScoreboardVM from the subsystem API first
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.ExecuteToggleMute();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScoreboardVM missionScoreboardVM = ...;
missionScoreboardVM.OnFinalize();
```

## See Also

- [Area Index](../)