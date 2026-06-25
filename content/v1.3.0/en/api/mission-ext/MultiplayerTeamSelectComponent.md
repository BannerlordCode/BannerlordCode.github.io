---
title: "MultiplayerTeamSelectComponent"
description: "Auto-generated class reference for MultiplayerTeamSelectComponent."
---
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## Overview

`MultiplayerTeamSelectComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerTeamSelectComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSelectionEnabled` | `public bool TeamSelectionEnabled { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnRemoveBehavior();
```

### SelectTeam
`public void SelectTeam()`

**Purpose:** **Purpose:** Executes the SelectTeam logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.SelectTeam();
```

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of teams.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.UpdateTeams(peer, oldTeam, newTeam);
```

### GetDisabledTeams
`public List<Team> GetDisabledTeams()`

**Purpose:** **Purpose:** Reads and returns the disabled teams value held by the this instance.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetDisabledTeams();
```

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)`

**Purpose:** **Purpose:** Executes the ChangeTeamServer logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.ChangeTeamServer(networkPeer, team);
```

### ChangeTeam
`public void ChangeTeam(Team team)`

**Purpose:** **Purpose:** Executes the ChangeTeam logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.ChangeTeam(team);
```

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team)`

**Purpose:** **Purpose:** Reads and returns the player count for team value held by the this instance.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetPlayerCountForTeam(team);
```

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)`

**Purpose:** **Purpose:** Reads and returns the friends for team value held by the this instance.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetFriendsForTeam(team);
```

### BalanceTeams
`public void BalanceTeams()`

**Purpose:** **Purpose:** Executes the BalanceTeams logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.BalanceTeams();
```

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer)`

**Purpose:** **Purpose:** Executes the AutoAssignTeam logic.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.AutoAssignTeam(peer);
```

### OnSelectingTeamDelegate
`public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)`

**Purpose:** **Purpose:** Invoked when the selecting team delegate event is raised.

```csharp
// Obtain an instance of MultiplayerTeamSelectComponent from the subsystem API first
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnSelectingTeamDelegate(disableTeams);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## See Also

- [Area Index](../)