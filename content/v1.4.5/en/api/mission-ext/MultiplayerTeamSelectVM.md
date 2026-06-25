---
title: "MultiplayerTeamSelectVM"
description: "Auto-generated class reference for MultiplayerTeamSelectVM."
---
# MultiplayerTeamSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerTeamSelectVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.Tick(0);
```

### RefreshDisabledTeams
`public void RefreshDisabledTeams(List<Team> disabledTeams)`

**Purpose:** Keeps the display or cache of `disabled teams` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshDisabledTeams(disabledTeams);
```

### RefreshPlayerAndBotCount
`public void RefreshPlayerAndBotCount(int playersCountOne, int playersCountTwo, int botsCountOne, int botsCountTwo)`

**Purpose:** Keeps the display or cache of `player and bot count` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshPlayerAndBotCount(0, 0, 0, 0);
```

### RefreshFriendsPerTeam
`public void RefreshFriendsPerTeam(IEnumerable<MissionPeer> friendsTeamOne, IEnumerable<MissionPeer> friendsTeamTwo)`

**Purpose:** Keeps the display or cache of `friends per team` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshFriendsPerTeam(friendsTeamOne, friendsTeamTwo);
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.ExecuteCancel();
```

### ExecuteAutoAssign
`public void ExecuteAutoAssign()`

**Purpose:** Runs the operation or workflow associated with `auto assign`.

```csharp
// Obtain an instance of MultiplayerTeamSelectVM from the subsystem API first
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.ExecuteAutoAssign();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerTeamSelectVM multiplayerTeamSelectVM = ...;
multiplayerTeamSelectVM.RefreshValues();
```

## See Also

- [Area Index](../)