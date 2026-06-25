---
title: "MultiplayerTeamSelectVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTeamSelectVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTeamSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerTeamSelectVM.cs`

## Overview

`MultiplayerTeamSelectVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team1` | `public TeamSelectTeamInstanceVM Team1 { get; set; }` |
| `Team2` | `public TeamSelectTeamInstanceVM Team2 { get; set; }` |
| `TeamSpectators` | `public TeamSelectTeamInstanceVM TeamSpectators { get; set; }` |
| `TeamSelectTitle` | `public string TeamSelectTitle { get; set; }` |
| `IsRoundCountdownAvailable` | `public bool IsRoundCountdownAvailable { get; set; }` |
| `RemainingRoundTime` | `public string RemainingRoundTime { get; set; }` |
| `GamemodeLbl` | `public string GamemodeLbl { get; set; }` |
| `AutoassignLbl` | `public string AutoassignLbl { get; set; }` |
| `IsCancelDisabled` | `public bool IsCancelDisabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### RefreshDisabledTeams
`public void RefreshDisabledTeams(List<Team> disabledTeams)`

**Purpose:** Refreshes the display or cache of `disabled teams`.

### RefreshPlayerAndBotCount
`public void RefreshPlayerAndBotCount(int playersCountOne, int playersCountTwo, int botsCountOne, int botsCountTwo)`

**Purpose:** Refreshes the display or cache of `player and bot count`.

### RefreshFriendsPerTeam
`public void RefreshFriendsPerTeam(IEnumerable<MissionPeer> friendsTeamOne, IEnumerable<MissionPeer> friendsTeamTwo)`

**Purpose:** Refreshes the display or cache of `friends per team`.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteAutoAssign
`public void ExecuteAutoAssign()`

**Purpose:** Executes the `auto assign` operation or workflow.

## Usage Example

```csharp
var value = new MultiplayerTeamSelectVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)