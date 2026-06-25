---
title: "MultiplayerTeamSelectComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTeamSelectComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## Overview

`MultiplayerTeamSelectComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerTeamSelectComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSelectionEnabled` | `public bool TeamSelectionEnabled { get; }` |

## Key Methods

### OnSelectingTeamDelegate
`public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)`

**Purpose:** Called when the `selecting team delegate` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### SelectTeam
`public void SelectTeam()`

**Purpose:** Handles logic related to `select team`.

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Updates the state or data of `teams`.

### GetDisabledTeams
`public List<Team> GetDisabledTeams()`

**Purpose:** Gets the current value of `disabled teams`.

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)`

**Purpose:** Handles logic related to `change team server`.

### ChangeTeam
`public void ChangeTeam(Team team)`

**Purpose:** Handles logic related to `change team`.

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team)`

**Purpose:** Gets the current value of `player count for team`.

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)`

**Purpose:** Gets the current value of `friends for team`.

### BalanceTeams
`public void BalanceTeams()`

**Purpose:** Handles logic related to `balance teams`.

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer)`

**Purpose:** Handles logic related to `auto assign team`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)