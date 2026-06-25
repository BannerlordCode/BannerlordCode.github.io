---
title: "AssignPlayerRoleInTeamMissionController"
description: "Auto-generated class reference for AssignPlayerRoleInTeamMissionController."
---
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## Overview

`AssignPlayerRoleInTeamMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `AssignPlayerRoleInTeamMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; set; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; set; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** **Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnTeamDeployed(team);
```

### OnPlayerTeamDeployed
`public virtual void OnPlayerTeamDeployed()`

**Purpose:** **Purpose:** Invoked when the player team deployed event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerTeamDeployed();
```

### OnPlayerChoiceMade
`public virtual void OnPlayerChoiceMade(int chosenIndex)`

**Purpose:** **Purpose:** Invoked when the player choice made event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceMade(0);
```

### OnPlayerChoiceFinalized
`public void OnPlayerChoiceFinalized()`

**Purpose:** **Purpose:** Invoked when the player choice finalized event is raised.

```csharp
// Obtain an instance of AssignPlayerRoleInTeamMissionController from the subsystem API first
AssignPlayerRoleInTeamMissionController assignPlayerRoleInTeamMissionController = ...;
assignPlayerRoleInTeamMissionController.OnPlayerChoiceFinalized();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## See Also

- [Area Index](../)