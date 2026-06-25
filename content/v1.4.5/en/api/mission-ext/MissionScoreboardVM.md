---
title: "MissionScoreboardVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardVM.cs`

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

**Purpose:** Called when the `finalize` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetMouseState
`public void SetMouseState(bool isMouseVisible)`

**Purpose:** Sets the value or state of `mouse state`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnPlayerSideChanged
`public void OnPlayerSideChanged(Team curTeam, Team nextTeam, MissionPeer client)`

**Purpose:** Called when the `player side changed` event is raised.

### DecreaseSpectatorCount
`public void DecreaseSpectatorCount(MissionPeer spectatedPeer)`

**Purpose:** Handles logic related to `decrease spectator count`.

### IncreaseSpectatorCount
`public void IncreaseSpectatorCount(MissionPeer spectatedPeer)`

**Purpose:** Handles logic related to `increase spectator count`.

### ExecuteToggleMute
`public void ExecuteToggleMute()`

**Purpose:** Executes the `toggle mute` operation or workflow.

## Usage Example

```csharp
var value = new MissionScoreboardVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)